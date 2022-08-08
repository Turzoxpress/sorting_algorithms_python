def bubble_sort(arr):

    size = len(arr) - 1
    swapped = False
    for i in range(size):
        for j in range(size-i):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break #array is already sorted


if __name__ == '__main__':
    elements = [5,9,2,1,67,34,88,34]
    print("Given array : " )
    print(elements)
    bubble_sort(elements)
    print("Sorted array : " )
    print(elements)