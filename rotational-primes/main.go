// package main

// func IsPrime(value int) bool {
// 	for i := 2; i <= int(math.Floor(float64(value)/2)); i++ {
// 		if value%i == 0 {
// 			return false
// 		}
// 	}
// 	return value > 1
// }

// func leftRotate(temp []int64) (int64, []int64) {
// 	l := len(temp)
// 	unSplit := make([]int64, l)
// 	theSplit := make([]int64, l)
// 	// tempNum := convertToNumber(temp, l)
// 	// posPrimes = append(posPrimes, tempNum)
// 	for i := 0; i < l-1; i++ {

// 		unSplit, theSplit = leftRotationbyOne(temp, l)

// 	}
// 	return unSplit, theSplit
// }

// func convertToNumber(temp []int64, n int) int64 {
// 	temp2 := make([]string, n)
// 	for i := 0; i < n; i++ {
// 		temp2[i] = strconv.FormatInt(int64(temp[i]), 10)
// 	}
// 	arrJoin := strings.Join(temp2, "")
// 	arrFin, _ := strconv.ParseInt(arrJoin, 10, 64)

// 	return arrFin
// }

// func leftRotationbyOne(starr []int64, n int) (int64, []int64) {
// 	temp := make([]int64, 0)
// 	temp = append(temp, starr[n-1])

// 	for i := 0; i < n; i++ {
// 		temp = append(temp, starr[i])
// 	}

// 	resConv := convertToNumber(temp, n)

// 	return resConv, temp
// }

// func main() {
// 	A := 1234
// 	A1 := strconv.FormatInt(int64(A), 10)
// 	A2 := strings.Split(A1, "")
// 	array := make([]int, len(A2))
// 	array1 := make([]int64, len(A2))
// 	for i := range array {
// 		array[i], _ = strconv.Atoi(A2[i])
// 		array1[i] = int64(array[i])
// 	}
// 	fmt.Println(leftRotate(array1))
// }
