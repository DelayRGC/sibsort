static void SibSort(double[] array)
{
	int gap = array.length;
	while (gap > 1)
	{
		gap = (int)Math.floor(gap * .75);
		if (gap % 2 == 0)
		{
			gap--; 
		}
		if (gap <= 1)
		{
			gap = 1;
		}
		for (int index = 0; index < array.length - gap; index += 2)
		{
			if (array[index] > array[index + gap])
			{
				double temp = array[index];
				array[index] = array[index + gap];
				array[index + gap] = temp;
			}
		}
		for (int index = 1; index < array.length - gap; index += 2)
		{
			if (array[index] > array[index + gap])
			{
				double temp = array[index];
				array[index] = array[index + gap];
				array[index + gap] = temp;
			}
		}
	}
	Insertion(array);
}

static void Insertion(double[] array)
{
	for (int index = 1; index < array.length; index++)
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
