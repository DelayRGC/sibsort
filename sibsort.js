function sibsort(array)
{
	let gap = array.length;
	while (gap > 1)
	{
		gap = Math.floor(gap * .75)
		if (gap % 2 == 0)
		{
			gap--;
		}
		if (gap <= 1)
		{
			gap = 1;
		}
		for (let index = 0; index < array.length - gap; index += 2)
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
		for (let index = 1; index < array.length - gap; index += 2)
		{
			if (array[index] > array[index + gap])
			{
				[array[index], array[index + gap]] = [array[index + gap], array[index]];
			}
		}
	}
	insertion(array);
}

function insertion(array)
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
