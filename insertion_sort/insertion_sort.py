def insertion_sort(arr):
    size = len(arr) - 1

    for i in range(1, size):
        anchor = arr[i]
        j = i - 1 #always will be lesser then anchor's position
        while j >= 0 and anchor < arr[j]:
            arr[j+1] = arr[j] #shift all the greater values to the right
            j = j - 1
        arr[j+1] = anchor #replace with anchor value with suitable position
    
        

if __name__ == '__main__':
    elements = [5,9,2,1,67,34,88,34]
    print("Given array : " )
    print(elements)
    insertion_sort(elements)
    print("Sorted array : " )
    print(elements)