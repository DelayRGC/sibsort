function SibSort(array)
{																				
	let gap = array.length; //											gap will determine how many indexes apart the comparisons happen
	while (gap > 3)
	{
		gap = Math.floor(gap * .75) //										shrink gap every loop and keep it odd
		if (gap % 2 == 0)
		{
			gap--;
		}
		for (let index = 0; index < array.length - gap; index += 2) //						compare and swap gapped odd-even pairs
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
		for (let index = 1; index < array.length - gap; index += 2) //						compare and swap gapped even-odd pairs
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
	}
	Insertion(array); //												call insertion to finish
}

// build a growing sorted list by inserting each piece encountered where it fits in that list
function Insertion(array)															
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
