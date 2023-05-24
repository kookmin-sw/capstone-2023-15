# ThreeF: FIND FAKE NFT

## Model Deployment

### Environments
Currently  requires following packages
- python 3.10 
- torch 1.13 
- torchvision 0.14.1
- CUDA 11.6
- scikit-learn 0.22+
- tensorboard 2.0+
- diffdist == 0.1

### project clone 

```
git clone https://github.com/kookmin-sw/capstone-2023-15.git
```

### install required packages

```
pip install boto3
pip install python-detenv
pip install opencv-python
```

### Train

``` 
python train.py --dataset ours --model resnet18 --mode simclr_CSI --shift_trans_type rotation --batch_size 32 --one_class_idx 0
```

### Evaluation

```
python caps_runner.py
```


## Modified based on the official code : https://github.com/alinlab/CSI