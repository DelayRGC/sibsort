public static int[] SibSort(int[] array) //									Change datatype of array for your use case!
{
	int gap = (int) (array.Length * 0.75);
	while (gap > 1)
	{

		for (int index = 0; index < array.Length - gap; index += 2) //					compare and swap gapped odd-even pairs
		{
			if (array[index] > array[index + gap])
			{
				array = Swap(array, i, i + gap);
			}
		}
		for (int index = 1; index < array.Length - gap; index += 2) //					compare and swap gapped even-odd pairs
		{
			if (array[index] > array[index + gap])
			{
				array = Swap(array, i, i + gap);
			}
		}
		gap = (int) (gap * .75); //									gap will determine how many indexes apart the comparisons happen
		if (gap % 2 == 0) //										shrink gap every loop
		{
			gap--; 
		}
	}
	array = Insertion(array);
	return array; //											once gap is 1 or lower, call insertion to finish
}

// build a growing sorted list by inserting each piece encountered where it fits in that list
public static int[] Insertion(int[] array) //									Change datatype of array for your use case!
{
	for (int i = 1; i < array.Length; i++)
	{
		int iValue = array[i];
		for (int j = i - 1; j >= 0 && array[j] > iValue; j--)
		{
			array = Swap(array, j, j + 1);
		}
	}
	return array;
}

public static int[] Swap(int[] array, int a, int b)
{
	int temp = array[a];
	array[a] = array[b];
	array[b] = temp;
	return array;
}
//By RapskaL23 & siblinghood
