function sibsort(array)
{																				
	let gap = Math.floor(array.length * .75); //								gap will determine how many indexes apart the comparisons happen
	while (gap > 1)
	{
		for (let i = 0; i < array.length - gap; i += 2) //						compare and swap gapped odd-even pairs
		{
			if (array[i] > array[i + gap])
			{
				[array[i], array[i + gap]] = [array[i + gap], array[i]];
			}
		}
		for (let i = 1; i < array.length - gap; i += 2) //						compare and swap gapped even-odd pairs
		{
			if (array[i] > array[i + gap])
			{
				[array[i], array[i + gap]] = [array[i + gap], array[i]];
			}
		}
		gap = Math.floor(gap * .75) //									shrink gap every loop and keep it odd
		if (gap % 2 == 0)
		{
			gap--;
		}
	}
	insertion(array); //											call insertion to finish
}

// build a growing sorted list by inserting each piece encountered where it fits in that list
function insertion(array)
{
	for (let i = 1; i < array.length; i++)
	{
		iValue = array[i];
		for (let j = i - 1; j >= 0 && array[j] > iValue; j--)
		{
			[array[j], array[j + 1]] = [array[j + 1], array[j]]
		}
	}
	return array;
}
