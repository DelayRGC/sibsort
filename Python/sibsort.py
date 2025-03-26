import math

def sibsort(array):
	gap = math.floor(len(array) * .75) #											gap will determine how many indexes apart the comparisons happen
	while gap > 1:

		for index in range(0, len(array) - gap, 2): #									compare and swap gapped odd-even pairs
			if array[index] > array[index + gap]:
				array[index], array[index + gap] = array[index + gap], array[index]
		for index in range(1, len(array) - gap, 2): # 									compare and swap gapped even-odd pairs
			if array[index] > array[index + gap]:
				array[index], array[index + gap] = array[index + gap], array[index]
		gap = math.floor(gap * .75)
		if gap % 2 == 0: #												keep gap odd
			gap = gap - 1
	insertion(array) #													once gap is 1 or lower, call insertion to finish

# build a growing sorted list by inserting each piece encountered where it fits in that list
def insertion(array): 
	for index in range(1, len(array)):
		pointer = index - 1
		index_value = array[index]
		while index_value < array[pointer]:
			array[pointer], array[pointer + 1] = array[pointer + 1], array[pointer]
			if pointer > 0:
				pointer -= 1
