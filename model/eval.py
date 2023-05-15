from common.eval import * 
import json
import csv 
from datetime import datetime
import time
import boto3
from botocore.exceptions import NoCredentialsError
import uuid
from decimal import Decimal

model.eval() 

if P.mode == 'test_acc' :
    from evals import test_classifier
    with torch.no_grad():
        error = test_classifier(P, model, ood_test_loader[ood], 0, logger=None)

elif P.mode == 'caps':
    try:
        from evals.ood_pre import caps_score
        with torch.no_grad():
                li, train_len, test_len    = caps_score(P, model, test_loader, ood_test_loader, P.ood_score,
                                            train_loader=train_loader, simclr_aug=simclr_aug)

        # json file open 
        path = './data/monkey.json'
        # path = './data/'+ P.author_name + '/metadata.json'
        with open(path, 'r', encoding='utf-8') as json_file:
            json_data = json.load(json_file)

        result_dict = {"data_type":'respone'}

        # json file open 
        # path = './data/monkey.json'
        path = './data/metadata.json'
        # path = './data/'+ P.author_name + '/metadata.json'
        with open(path, 'r', encoding='utf-8') as json_file:
            json_data = json.load(json_file)

        result_dict = {"data_type":'respone'}

        # csv에 담을 data list 추가
        data = []
        for i in li:
            a = []
            c = 7-len(str(i[0]))
            q = '0'*c + str(i[0])
            da = json_data[q]
            a.append(da['image_name']) 
            a.append(da['collection_name'])
            a.append(da['token_id']) 
            a.append(da['art_address']) 
            data.append(a)

        filename =  P.author_name +'.csv'
        # filename = './output/+ P.author_name +/이름.csv'
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(['image_name','collection_name','token_id','art_address'])
            for row in data:
                writer.writerow(row)
        
        id = str(uuid.uuid4())
        pr = 'safe'
        if len(li) > 0 : 
            pr = 'danger'
        result_dict["id"] = id
        result_dict["status"] = 'done'
        result_dict["client_email"] = json_data['0000000']['client_emaill']
        result_dict["collection_name"] = json_data['0000000']['collection_name']
        result_dict["timestamp"] = int(time.time())
        result_dict['number_of_malicious_image'] = len(li)
        result_dict["predict_result"] = pr
        result_dict["train_images_cnt"] = train_len
        result_dict["target_images_cnt"] = test_len 
       
        AWS_ACCESS_KEY = ''
        AWS_SECRET_KEY = ''
        
        dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-2',
                              aws_access_key_id= AWS_ACCESS_KEY,
                              aws_secret_access_key=AWS_SECRET_KEY)

        table_name = 'TF_database'
        table = dynamodb.Table(table_name)


        response = table.put_item(Item=result_dict)

        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            print('Data inserted successfully!')
        else:
            print('Failed to insert data.')
            
        # # Amazon S3 리소스 생성
        s3 = boto3.resource(
            's3',
            aws_access_key_id=AWS_ACCESS_KEY,
            aws_secret_access_key=AWS_SECRET_KEY
            )

        def upload_to_s3(local_file, bucket_name, s3_file):
            try:
                s3.Bucket(bucket_name).upload_file(local_file, s3_file)
                print(f"{local_file} 파일이 성공적으로 {bucket_name} 버킷에 업로드 되었습니다.")
            except NoCredentialsError:
                print("자격 증명이 없습니다. AWS_ACCESS_KEY 및 AWS_SECRET_KEY를 확인하십시오.")
  
        local_file = './awesome.csv'
        bucket_name = 'threef-bucket'
        s3_file = 'threef-bucket/awesome.csv'
        
        upload_to_s3(local_file, bucket_name, s3_file)

    except :      
        result_dict = {}
        id = str(uuid.uuid4())
        result_dict["id"] = id
        result_dict["status"] = 'fail'
        # result_dict["client_email"] = json_data['0']['emaill']
        result_dict["client_email"] = 'done'
        result_dict["collection_name"] = 'done'
        result_dict["timestamp"] = 'done'
        # result_dict["thumbnail_image"] = json_data[str(li[0][0])]['art_address']
        result_dict['number_of_malicious_image'] = 'done'
        result_dict["predict_result"] = 'ignore'
        result_dict["train_images_cnt"] = 'done'
        result_dict["target_images_cnt"] = 'done' 
    
        dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-2',
                              aws_access_key_id='',
                              aws_secret_access_key='')
    
        table_name = 'TF_database'
        table = dynamodb.Table(table_name)
    
    
        response = table.put_item(Item=result_dict)
    
        if response['ResponseMetadata']['HTTPStatusCode'] == 200:
            print('Data inserted successfully!')
        else:
            print('Failed to insert data.')

elif P.mode == 'test_marginalized_acc':
    from evals import test_classifier
    with torch.no_grad():
        error = test_classifier(P, model, test_loader, 0, marginal=True, logger=None)

elif P.mode in ['ood', 'ood_pre']:
    if P.mode == 'ood':
        from evals import eval_ood_detection
    else:
        from evals.ood_pre import eval_ood_detection

    with torch.no_grad():
        auroc_dict = eval_ood_detection(P, model, test_loader, ood_test_loader, P.ood_score,
                                        train_loader=train_loader, simclr_aug=simclr_aug)

    if P.one_class_idx is not None:
        mean_dict = dict()
        for ood_score in P.ood_score:
            mean = 0
            for ood in auroc_dict.keys():
                mean += auroc_dict[ood][ood_score]
            mean_dict[ood_score] = mean / len(auroc_dict.keys())
        auroc_dict['one_class_mean'] = mean_dict

    bests = []
    for ood in auroc_dict.keys():
        message = ''
        best_auroc = 0
        for ood_score, auroc in auroc_dict[ood].items():
            message += '[%s %s %.4f] ' % (ood, ood_score, auroc)
            if auroc > best_auroc:
                best_auroc = auroc
        message += '[%s %s %.4f] ' % (ood, 'best', best_auroc)
        if P.print_score:
            print(message)
        bests.append(best_auroc)

    bests = map('{:.4f}'.format, bests)
    print('\t'.join(bests))

else:
    raise NotImplementedError()
