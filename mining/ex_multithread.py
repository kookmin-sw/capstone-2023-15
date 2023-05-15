'''
from multiprocessing import Process,freeze_support
import time
checking = 0

def func1():
    time.sleep(5)
    print(1)


def func2(a):
    return a

if __name__=='__main__':
    freeze_support()
    # 프로세스를 생성합니다
    p1 = Process(target=func1) #함수 1을 위한 프로세스
    p2 = Process(target=func2,args=(1,)) #함수 2을 위한 프로세스

    # start로 각 프로세스를 시작합니다. func1이 끝나지 않아도 func2가 실행됩니다.
    p1.start()
    p2.start()

    print(p2)
'''
import multiprocessing
import time

def worker(return_dict):
    """worker function"""
    time.sleep(5.0)
    return_dict[0] = 0

def worker2(procnum, return_dict):
    """worker function"""
    print(str(procnum) + " represent!")
    time.sleep(10.0)
    return_dict[0] = 1

if __name__ == "__main__":
    manager = multiprocessing.Manager()
    return_dict = manager.dict()
    p = multiprocessing.Process(target=worker, args=(return_dict))

    p1 = multiprocessing.Process(target=worker2, args=(0, return_dict))
    p.start()
    p1.start()

    while True:
        if not p.is_alive():
            print("func1 finished first")
            print(return_dict[0])
            p.join()
            p1.kill()
            break
        elif not p1.is_alive():
            print("func2 finished first")
            print(return_dict[0])
            p1.join()
            p.kill()
            break
