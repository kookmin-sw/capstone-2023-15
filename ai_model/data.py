giimport torch.utils.data
import torchvision.transforms as transforms
from torchvision.datasets import CIFAR10, CIFAR100, ImageNet
import cv2
import numpy as np
import os

def RGBms(data):
    # data = torchvision.datasets.CIFAR100(root="./", train=True, download=True)
    rgb = np.concatenate([np.asarray(data[i][0]) for i in range(len(data))])
    mean = (np.mean(rgb,axis=(0,1))/255).tolist()
    std = (np.std(rgb,axis=(0,1))/255).tolist()
    return mean,std


valid_datasets = [
    'cdata'
]

# 크롤링 상황에 맞게 수정 
class CustomDataset(Dataset):
    def __init__(self, csv_file, root_dir, transform=None):

    def __len__(self):
        return len(self.landmarks_frame)

    def __getitem__(self, idx):

        # return sample


def _verify_dataset(dataset):
    r"""verify your dataset.  
    If your dataset name is unknown dataset, raise error message..
    """
    if dataset not in valid_datasets:
        msg = "Unknown dataset \'{}\'. ".format(dataset)
        msg += "Valid datasets are {}.".format(", ".join(valid_datasets))
        raise ValueError(msg)
    return dataset


def custom_loader(batch_size, num_workers, datapath, image_size=정해야함 ,data, cuda=False):
    nor = RGBms(data)
    normalize = transforms.Normalize(nor)
    transform_train = transforms.Compose([
        transforms.RandomCrop(32, padding=4),
        transforms.RandomHorizontalFlip(),
        transforms.ToTensor(),
        normalize,
    ])
    transform_val = transforms.Compose([
        transforms.ToTensor(),
        normalize,
    ])

    trainset = CustomDataset(
        root=datapath, train=True, download=True,
        transform=transform_train)
    valset = CustomDataset(
        root=datapath, transform=transform_val)

    if cuda:
        train_loader = torch.utils.data.DataLoader(
            trainset,
            batch_size=batch_size, shuffle=True,
            num_workers=num_workers, pin_memory=True)
        val_loader = torch.utils.data.DataLoader(
            valset,
            batch_size=batch_size, shuffle=False,
            num_workers=num_workers, pin_memory=True)
    else:
        train_loader = torch.utils.data.DataLoader(
            trainset,
            batch_size=batch_size, shuffle=True,
            num_workers=num_workers, pin_memory=False)
        val_loader = torch.utils.data.DataLoader(
            valset,
            batch_size=batch_size, shuffle=False,
            num_workers=num_workers, pin_memory=False)
    
    return train_loader, val_loader


def DataLoader(batch_size, dataset='cifar10', num_workers=4, datapath='../data', image_size=32, cuda=True):
    """Dataloader for training/validation
    """
    DataSet = _verify_dataset(dataset)
    if DataSet == 'cdata':
        return custom_loader(batch_size, num_workers, datapath, image_size, cuda)


if __name__ == '__main__':
    pass