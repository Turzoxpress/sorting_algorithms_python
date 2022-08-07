def bubble_sort(arr):

    size = len(arr) - 1
    for i in range(size):
        for j in range(size-i):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1], arr[j]


if __name__ == '__main__':
    elements = [5,9,2,1,67,34,88,34]
    bubble_sort(elements)
    print(elements)