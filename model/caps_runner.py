import subprocess
import sys

    
for _ in [1]:
        subprocess.run(['python',
         'eval.py',
          '--mode',
          'caps',
         # 'ood_pre',
         '--dataset',
         'ours',
         # 'cifar10',
         '--model',
         'resnet18',
         '--ood_score',
         'CSI',
         '--shift_trans_type',
         'rotation',
          '--print_score',
         '--ood_samples',
          '10',
         '--resize_factor',
          '0.54',
         '--resize_fix',
         '--one_class_idx',
         '0',
         '--author_name',
         'awesome', # 작가이름 작성
         '--load_path',
        'logs/ours_resnet18_unsup_simclr_CSI_shift_rotation_one_class_0/last.model'
        # 'logs/cifar10_resnet18_unsup_simclr_CSI_shift_rotation_one_class_0__1/last.model'
        ])
