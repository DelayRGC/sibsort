public static int[] SibSort(int[] array) //					Change datatype of array for your use case!
{
	int gap = (int) (array.length * 0.75);
	if (gap % 2 == 0)
	{
		gap--;
	}
	while (gap > 1)
	{
		System.out.println(gap);
		for (int i = 0; i + gap < array.length; i += 2)
		{
			if (array[i] > array[i + gap])
			{
				array = Swap(array, i, i + gap);
			}
		}
		for (int i = 1; i + gap < array.length; i += 2)
		{
			if (array[i] > array[i + gap])
			{
				array = Swap(array, i, i + gap);
			}
		}
		gap = (int) (gap * 0.75);
		if (gap % 2 == 0)
		{
			gap--;
		}
	}
	array = Insertion(array);
	return array;
}

public static int[] Insertion(int[] array) //					Change datatype of array for your use case!
{
	for (int i = 1; i < array.length; i++)
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
// by siblinghood
