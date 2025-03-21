import math

def sibsort(array):
	gap = len(array) # gap will determine how many indexes apart the comparisons happen
	while True:
		gap = math.floor(gap * .75)
		if gap % 2 == 0: # keep gap odd
			gap = gap - 1
		if gap <= 1: # if gap is 1 or lower, break out of the while loop
			break
		for index in range(0, len(array) - gap, 2): # compare and swap gapped odd-even pairs
			if array[index] > array[index + gap]:
				array[index], array[index + gap] = array[index + gap], array[index]
		for index in range(1, len(array) - gap, 2): # // compare and swap gapped even-odd pairs
			if array[index] > array[index + gap]:
				array[index], array[index + gap] = array[index + gap], array[index]
	insertion(array) # once gap is 1 or lower, call insertion to finish

def insertion(array): # build a growing sorted list by inserting each piece encountered where it fits in that list
	for index in range(1, len(array)):
		pointer = index - 1
		index_value = array[index]
		while index_value < array[pointer]:
			array[pointer], array[pointer + 1] = array[pointer + 1], array[pointer]
			if pointer > 0:
				pointer -= 1
