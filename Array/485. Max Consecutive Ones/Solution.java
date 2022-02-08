public class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        int count = nums[0] == 1 ? 1 : 0;
        int max = count;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == 1) {
                count += 1;
            } else {
                count = 0;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}