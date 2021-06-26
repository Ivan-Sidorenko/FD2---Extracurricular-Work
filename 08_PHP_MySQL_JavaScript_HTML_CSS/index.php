<?php //index.php
    //Глава 1 примеров не имела
    //Глава 2 примеров не имела
    //Глава 3
    /* $surname = "Fred Smith";
    echo $surname;
    echo "<br>";
    $curent_user = $surname;
    echo $curent_user; */

    /* $team = array ("Bull", "Mary", "Mike", "Chris", "Anne");
    echo $team[3]; */

    /* $xox = array(array("x", " ", "0"),
                 array("0", "0", "x"),
                 array("x", "0", " "),
    );
    echo $xox[1][2]; */

    /* echo 6 + 2; */

    /* $count = 5;
    echo $count += 1; */

    /* $hour = 13;
    if ($hour > 12 && $hour < 14) echo "dolunch"; */

    /* $x = 9;
    if (++$x == 10) echo $x; */

    /* $y = 0;
    if ($y-- == 0) echo $y; */

    /* $msgs = 5;
    echo "У вас " . $msgs . " сообщений."; */

    /* $a = "Пере";
    $b = "крест";
    $c = "ок";
    echo $a .= $b .= $c; */

    /* $info = 'Предваряйте имена символов $, как в данном примере: $variable';
    echo $info; */

    /* $count = 10;
    echo "На этой неделе ваш профиль просмотрело $count человек"; */

    /* $heading = "Дата\tИмя\tПлатеж";
    echo $heading; */

    /* $author = "Steve Ballmer";
    echo "Developers, Developers, developers, developers,
    developers, developers, developers, developers, developers!
    $author."; */

    /* $author = "Bill Gates";
    $text = "Measuring programming progress by lines of code is like
    measuring aircraft building progress by weight.
    $author.";
    echo $text; */

    /* $author = "Brian W. Kernigan";

    echo <<<_END
    Debugging is twice as hard as writing the code in the first place.
    Therefore, if you write the code as cleaverly as possible, you are, 
    by definition, not smart enough to debug it.
    $author.
    _END; */

    /* $author = "Scott Adams";

    $out = <<<_END
    Normal people belive that if it ain't broke, don't fix it.
    Engeneers belive that if it ain't broke, it doesn't have enough
    reatures yet.
    - $author.
    _END;
    echo $out; */

    /* $number = 12345 * 67890;
    echo substr($number, 3, 1); */

    /* $pi = "3.1415927";
    $radius = 5;
    echo $pi * ($radius * $radius); */

    //Глава 4
    /* echo "a: [" . true . "]<br>";
    echo "b: [" . false . "]<br>"; */

    /* echo "a: [" . (20 > 9) . "]<br>";
    echo "b: [" . (5 == 6) . "]<br>";
    echo "c: [" . (1 == 0) . "]<br>";
    echo "d: [" . (1 == 1) . "]<br>"; */

    /* $myname = "Brian";
    $myage  = 37;

    echo "a: " . 73      . "<br>"; // числовой литерал
    echo "b: " . "Hello" . "<br>"; // строковый литерал
    echo "c: " . FALSE   . "<br>"; // константный (резервированное значение) литерал
    echo "d: " . $myname . "<br>"; // строковая переменная
    echo "e: " . $myage  . "<br>"; // числовая переменная  */

    /* $day_number = 340;                
    $days_to_new_year = 366 - $day_number; // выражение

    if ($days_to_new_year < 30)             
    {
        echo "Скоро Новый Год!"; // инструкция
    } */

    /* $month = "March";

    if ($month == "March") echo "Скоро весна!"; */

    /* $a = "1000";
    $b = "+1000";

    if ($a == $b)  echo "1";
    if ($a === $b) echo "2"; */

    /* $a = "1000";
    $b = "+1000";

    if ($a != $b)  echo "1";
    if ($a !== $b) echo "2"; */

    /* $a = 2; $b = 3;
    if ($a > $b)  echo "$a больше $b<br>";
    if ($a < $b)  echo "$a меньше $b<br>";
    if ($a >= $b) echo "$a больше или равно $b<br>";
    if ($a <= $b) echo "$a меньше или равно $b<br>"; */

    /* $a = 1; $b = 0;

    echo ($a AND $b) . "<br>";
    echo ($a or $b)  . "<br>";
    echo ($a XOR $b) . "<br>";
    echo !$a . "<br>"; */