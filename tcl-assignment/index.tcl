# Sorts lists using bubble sort algorithim.
#
# Arguments:
#   numList - list of numbers
#
# Returns:
#   sorted list
#
proc sortList {numList} {
    set n [llength $numList]
    for {set i 0} {$i < $n-1} {incr i} {
        set sorted true
        for {set j 0} {$j < $n-$i-1} {incr j} {
            set current [lindex $numList $j]
            set afterCurrent  [lindex $numList [expr $j+1]]
            if {$current > $afterCurrent} {
                set temp $current
                lset numList $j $afterCurrent
                lset numList [expr $j+1] $temp
                set sorted false
            }
        }
        if {$sorted} break
}
    return $numList
}

# Reverses a string
#
# Arguments:
#   str - string to be reversed
#
# Returns:
#   reversed string
proc reverseProcedure {str} { 
  set strSplitted [split $str]
  set reversed {}
  foreach word $strSplitted {
    set reversed [concat $word $reversed ]
  }

  return $reversed
}


####################  test cases  ####################


puts "Sort Procedure test"
puts [sortList {2 4 8 5 6 7 3 3 2 0}]
puts [sortList {10 9 8 7 6 5 4 3 2 1}]

puts "Reverse Procedure test"
puts [reverseProcedure "Hello World"]
puts [reverseProcedure "TCL is a Tool Command Language"]
puts [reverseProcedure "Welcome to you"]