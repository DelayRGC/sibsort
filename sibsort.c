void sibsort(int*, unsigned int);
void insertion(int*, unsigned int);

void sibsort(int* array, unsigned int length) {
    unsigned int gap = length;
    while (gap > 1) {
        gap = (gap * 3) / 4;
        if(gap % 2 == 0)
            gap--;
        }
        for (unsigned int index = 0; index < length - gap; index += 2) {
            if (array[index] > array[index + gap]) {
                int tmp = array[index];
                array[index] = array[index + gap];
                array[index + gap] = tmp;
            }
        }
        for (unsigned int index = 1; index < length - gap; index += 2) {
            if (array[index] > array[index + gap]) {
                int tmp = array[index];
                array[index] = array[index + gap];
                array[index + gap] = tmp;
            }
        }
    }
    insertion(array, length);
}


void insertion(int* array, unsigned int length) {
    for (unsigned int index = 1; index < length; index++) {
        int index_value = array[index];
        unsigned int pointer = index;
        while (pointer && array[pointer - 1] > index_value) {
            array[pointer] = array[pointer - 1];
            pointer--;

        }
        array[pointer] = index_value;
    }
}
