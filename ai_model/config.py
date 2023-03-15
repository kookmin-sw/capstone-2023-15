import argparse
import models

def config():
    r"""configuration settings
    """
    parser = argparse.ArgumentParser(description='AI-Challenge Base Code')
    
    parser.add_argument('-d', '--dataset', default='mnist', type=str)
    parser.add_argument('--datapath', default='../data', type=str, metavar='PATH',
                        help='where you want to load/save your dataset? (default: ../data)')
    parser.add_argument('--anomaly_class', default='1', type=int)
    parser.add_argument('--isize', default='28', type=int)

    parser.add_argument('-j', '--workers', default=4, type=int, metavar='N',
                        help='number of data loading workers (default: 4)')
    # for learning policy
    parser.add_argument('--epochs', default=100, type=int, metavar='N',
                        help='number of total epochs to run (default: 100)')
    parser.add_argument('--start-epoch', default=0, type=int, metavar='N',
                        help='manual epoch number (useful on restarts)')
    parser.add_argument('-b', '--batch-size', default=128, type=int, metavar='N',
                        help='mini-batch size (default: 128), this is the total '
                             'batch size of all GPUs on the current node when '
                             'using Data Parallel')
    parser.add_argument('--lr', '--learning-rate', default=0.001, type=float,
                        metavar='LR', help='initial learning rate (default: 0.1)',
                        dest='lr')
    parser.add_argument('--drop', '--dropout', default=0, type=float,
                        metavar='Dropout', help='Dropout ratio')
    parser.add_argument('--schedule', type=int, nargs='+', default=[40, 100],
                            help='Decrease learning rate at these epochs.')
    parser.add_argument('--gamma', type=float, default=0.1, help='LR is multiplied by gamma on schedule.')
    parser.add_argument('--momentum', default=0.9, type=float, metavar='M',
                        help='momentum')
    parser.add_argument('--weight-decay', '--wd', default=5e-4, type=float,
                        metavar='W', help='weight decay (default: 1e-4)')
    # for load and save
    parser.add_argument('--load', default=None, type=str, metavar='FILE.pth',
                        help='name of checkpoint for testing model (default: None)')
    parser.add_argument('--save', default='ckpt.pth', type=str, metavar='FILE.pth',
                        help='name of checkpoint for saving model (default: ckpt.pth)')
    # Architecture

    parser.add_argument('--depth', type=int, default=29, help='Model depth.')
    parser.add_argument('--block-name', type=str, default='BasicBlock',
                        help='the building block for Resnet and Preresnet: BasicBlock, Bottleneck (default: Basicblock for cifar10/cifar100)')
    parser.add_argument('--cardinality', type=int, default=8, help='Model cardinality (group).')
    parser.add_argument('--widen-factor', type=int, default=4, help='Widen factor. 4 -> 64, 8 -> 128, ...')
    parser.add_argument('--growthRate', type=int, default=12, help='Growth rate for DenseNet.')
    parser.add_argument('--compressionRate', type=int, default=2, help='Compression Rate (theta) for DenseNet.')
    # Miscs
    parser.add_argument('--manualSeed', type=int, help='manual seed')
    # for gpu configuration
    parser.add_argument('-C', '--cuda', dest='cuda', action='store_true',
                        help='use cuda?')
    parser.add_argument('-g', '--gpuids', metavar='GPU', default=[0],
                        type=int, nargs='+',
                        help='GPU IDs for using (default: 0)')
    # specify run type
    parser.add_argument('--run-type', default='train', type=str, metavar='TYPE',
                        help='type of run the main function e.g. train or evaluate (default: train)')
    
    cfg = parser.parse_args()
    return cfg 
