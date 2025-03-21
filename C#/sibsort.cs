static void SibSort(double[] array)
{
	int gap = array.Length;
	while (gap > 3)
	{
		gap = (int)Math.Floor(gap * .75); //								gap will determine how many indexes apart the comparisons happen
		if (gap % 2 == 0) //										shrink gap every loop
		{
			gap--; 
		}
		for (int index = 0; index < array.Length - gap; index += 2) //					compare and swap gapped odd-even pairs
		{
			if (array[index] > array[index + gap])
			{
				(array[index + gap], array[index]) = (array[index], array[index + gap]);
			}
		}
		for (int index = 1; index < array.Length - gap; index += 2) //					compare and swap gapped even-odd pairs
		{
			if (array[index] > array[index + gap])
			{
				(array[index + gap], array[index]) = (array[index], array[index + gap]);
			}
		}
	}
	Insertion(array); //											once gap is 1 or lower, call insertion to finish
}

// build a growing sorted list by inserting each piece encountered where it fits in that list
static void Insertion(double[] array)
{
	for (int index = 1; index < array.Length; index++)
	{
		int pointer = index - 1;
		double indexValue = array[index];
		while (indexValue < array[pointer])
		{
			double temp = array[pointer];
			array[pointer] = array[pointer + 1];
			array[pointer + 1] = temp;
			if (pointer > 0)
			{
				pointer--;
			}
		}
	}
}
//By RapskaL23
