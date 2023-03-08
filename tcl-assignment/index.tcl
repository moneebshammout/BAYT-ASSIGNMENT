#######################    Sort Function   ####################
###############################################################

proc sortList {numList} {
  set num_dict {}
  foreach num $numList {
    if {[dict exists num_dict $num]} {
    dict set num_dict $num [concat [dict get $num_dict $num] $num]
  } else {
      dict set num_dict $num [list $num]
  }
  }

set result ""

foreach key [dict keys $num_dict] {
  set result [concat [dict get $num_dict $key] $result] 
}

return $result
}
puts "Sort Procedure test"
puts [sortList {2 4 8 5 6 7 3 3 2 0}]
puts [sortList {10 9 8 7 6 5 4 3 2 1}]



#######################    Reverse Procedure  ####################
###############################################################

proc reverseProcedure {str} { 
  set strSplitted [split $str]
  set reversed {}
  foreach word $strSplitted {
    set reversed [concat $word $reversed ]
  }

  return $reversed
}

puts "Reverse Procedure test"
puts [reverseProcedure "Hello World"]
puts [reverseProcedure "TCL is a Tool Command Language"]
puts [reverseProcedure "Welcome to you"]