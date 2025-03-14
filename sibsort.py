import math

def sibsort(array):
    gap = len(array)
    while gap > 3:
        gap = math.floor(gap / (4 / 3))
        if gap % 2 == 0:
            gap = gap - 1
        for index in range(0, len(array)-gap, 2):
            if array[index] > array[index + gap]:
                array[index], array[index + gap] = array[index + gap], array[index]
        for index in range(1, len(array) - gap, 2):
            if array[index] > array[index + gap]:
                array[index], array[index + gap] = array[index + gap], array[index]
    insertion(array)

def insertion(array):
    for index in range(1, len(array)):
        pointer = index - 1
        index_value = array[index]
        while index_value < array[pointer]:
            array[pointer], array[pointer + 1] = array[pointer + 1], array[pointer]
            if pointer > 0:
                pointer -= 1