# Transcrypt library to use transcrypt commands.
# Run python -m transcrypt -b -n library when updating code.
from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
	# Apply input seed
	random.seed(seed)

	# Initialise empty array and append a random integer to it number-1 times between 0 and 10 inclusive.
	array = []
	for i in range(number):
		array.append(random.randint(0, 10))
	return array

def generate():
	number = 10
	seed = 200

	# call gen_random_int() with the given number and seed
	# store it to the variable array
	array = gen_random_int(10, 200)

	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	
	array_str = listToStr(array)
	array_str = array_str + "."

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str

def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# Obtain the list of numbers from the "generate" HTML id
	nums_str = document.getElementById("generate").innerHTML
	nums_str = nums_str[:-1].split(", ")

	nums = []
	for i in nums_str:
		nums.append(int(i))

	# Call Bubble Sort Function
	bubbleSort(nums)

	array_str = listToStr(nums)
	array_str = array_str + "."
	
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Your code should start from here

	# Split the string into a list based on comma delimiter.
	value = value.split(", ")

	# Append each element of the list of string into a new list after typecasting them to integers.
	nums = []
	for i in value:
		nums.append(int(i))

	# Call Bubble Sort Function
	bubbleSort(nums)

	# Call Function to Convert List of Integers to String
	array_str = listToStr(nums)

	# Get the element with the id "sorted" from the html file.
	document.getElementById("sorted").innerHTML = array_str

# Loop through array and typecast each element into a string. After that join all items using comma and a space as separator.
def listToStr(array):
	array_str = ", ".join(str(x) for x in array)
	return array_str

# Bubble Sort v4
def bubbleSort(array):
	n = len(array)
	swapped = True
	while swapped == True:
		swapped = False
		new_n = 0
		for j in range(1,n):
			if array[j-1] > array[j]:
				array[j-1], array[j] = array[j], array[j-1]
				swapped = True
				new_n = j
		n = n-1