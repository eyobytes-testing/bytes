package main

import "fmt"

func main() {
	x := 10

	// Duplicate branches - both if and else do the same thing
	if x > 5 {
		fmt.Println("hello")
	} else {
		fmt.Println("hello")
	}
}
