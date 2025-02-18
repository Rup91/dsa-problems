## What is Sliding Window technique ?
  -- Window means a range 
  -- By name, you can understand, it is a technique or algorithm, used to efficiently solve problems that involve defining a range in the given input(arrays or strings) and then moving that window across the data to perform some operation within the window (till the end).


## Example
  -- Lets say, we have an array called arr and the value is -> [1,2,3,4,5,6]
  -- Lets give a range of 3 (length of the the subarray)
  -- If we split the above array by subarray then it comes 
     [1,2,3], [2,3,4], [3,4,5], [4,5,6]

## Questions
   1. Find the maximum sum of the subarray

## Answer
    -- Step1: First we have to add all elements of the subarray
    -- [1,2,3] => 6
       [2,3,4] => 9
       [3,4,5] => 12
       [4,5,6] => 15
    -- Then find the maximum - which is 15

## Types
   -- Fixed Size window (where window size will be given)
   -- Variable Window Size (Where some condition will be given, and we have to find out the size of the window)