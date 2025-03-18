function sibsort(array)
{
	let gap = array.length; // gap will determine how many indexes apart the comparisons happen
	while (true)
	{
		gap = Math.floor(gap * .75) // shrink gap every loop
		if (gap % 2 == 0) // keep gap odd
		{
			gap--;
		}
		if (gap <= 1) // if gap is 1 or lower, break out of the while loop
		{
			break;
		}
		for (let index = 0; index < array.length - gap; index += 2) // compare and swap gapped odd-even pairs
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
		for (let index = 1; index < array.length - gap; index += 2) // compare and swap gapped even-odd pairs
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
	}
	insertion(array); // once gap is 1 or lower, call insertion to finish
}

function insertion(array) // build a growing sorted list by inserting each piece encountered where it fits in that list
{
	for (let index = 1; index < array.length; index++)
	{
		let pointer = index - 1;
		let indexValue = array[index];
		while (indexValue < array[pointer])
		{
			[array[pointer], array[pointer + 1]] = [array[pointer + 1], array[pointer]];
			if (pointer > 0)
			{
				pointer--;
			}
		}
	}
}
