Meteor.startup(function() {

    if (Challenge.find({}).count() === 0) {

        Challenge.insert({
            domain: 'Sorting',
            subdomain: 1,
            level: 1,
            section: 1,
            title: 'Insertion Sort',
            problem: '<div class="msB"><p><strong>Sorting</strong> <br> \
                        One common task for computers is to sort data. For example, people might want to see all their files on a computer sorted by size. Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms. </p>\
                        <p><strong>Insertion Sort</strong> <br> \
                        These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm. We will first start with an already sorted list. </p> \
                        <p><strong>Insert element into sorted list</strong> <br> \
                        Given a sorted list with an unsorted number <em>V</em> in the right-most cell, can you write some simple code to <i>insert</i> <em>V</em> into the array so it remains sorted? </p> \
                        <p>Print the array every time a value is shifted in the array until the array is fully sorted. The goal of this challenge is to follow the correct order of insertion sort. </p> \
                        <p><em>Guideline:</em> You can copy the value of <em>V</em> to a variable, and consider its cell "empty". Since this leaves an extra cell empty on the right, you can shift everything over until <em>V</em> can be inserted. This will create a duplicate of each value, but when you reach the right spot, you can replace a value with <em>V</em>. </p> \
                        <p><strong>Input Format</strong> <br> \
                        There will be two lines of input:</p> \
                        <ul> \
                        <li><em>s</em> - the size of the array</li> \
                        <li><em>ar</em> - the sorted array of integers</li> \
                        </ul> \
                        <p><strong>Output Format</strong> <br> \
                        On each line, output the entire array every time an item is shifted in it. </p> \
                        <p><strong>Constraints</strong> <br> \
                        1&lt;=<em>s</em>&lt;=1000 <br> \
                        -10000&lt;=<em>x</em>&lt;= 10000,  <em>x ∈ ar</em> </p> \
                        <p><strong>Sample Input</strong>  </p> \
                        <pre><code>5 \
                        2 4 6 8 3 \
                        </code></pre> \
                        <p><strong>Sample Output</strong></p> \
                        <pre><code>2 4 6 8 8 \
                        2 4 6 6 8 \
                        2 4 4 6 8 \
                        2 3 4 6 8 \
                        </code></pre> \
                        <p><strong>Explanation</strong></p> \
                        <p>3 is removed from the end of the array.<br> \
                        In the 1<sup>st</sup> line 8 &gt; 3, 8 is shifted one cell right. <br> \
                        In the 2<sup>nd</sup> line 6 &gt; 3, 6 is shifted one cell right. <br> \
                        In the 3<sup>rd</sup> line 4 &gt; 3, 4 is shifted one cell right. <br> \
                        In the 4<sup>th</sup> line 2 &lt; 3, 3 is placed at position 2.  </p> \
                        <p><strong>Task</strong>  </p> \
                        <p>Complete the method <i>insertionSort</i> which takes in 1 parameter:</p> \
                        <ul> \
                        <li><em>ar</em> - an array with the value <em>V</em> in the right-most cell.</li> \
                        </ul></div>',
            code: ["def insertionSort(alist):", "for index in range(1,len(alist)):", "currentvalue = alist[index]", "position = index", "while position>0 and alist[position-1]>currentvalue:"
            , "alist[position]=alist[position-1]", "position = position-1", "alist[position]=currentvalue", "alist = [54,26,93,17,77,31,44,55,20]", "insertionSort(alist)" , "print(alist)"],
            createdAt: new Date()
        });

       //test
       Challenge.insert({
           domain: 'Sorting',
           subdomain: 1,
           level: 2,
           section: 1,
           title: 'Introduction to coding I',
           problem: '<div class="msB"><p><strong>Introduction</strong> <br> \
                       Programming is not something that can be learned in a day, rather it takes months and years to fully master and understand code. We will now begin to educate you on \
                       the basics of coding, using "psudedo code" (pretend code, its easier to understand this before moving onto actual syntax) to demonstrate basic code structure!</p> \
                       <p><strong>The task</strong> <br> \
                       These challenges will cover basic code structure </p> \
                       <p><strong>Introduction to Functions</strong> <br> \
                          A function in programming is sort of like a factory. It takes in a particular "input", and returns out a particular "output". The format for most functions follow this:</p> \
                       <p>functionName(int input)</p> \
                       <p>The above code is what you would expect, a function name and a bracket encasing the input. However, you may ask, what does the "int" mean? The int is short \
                       for integer. Usually languages require you to list in the type of input you give into the function. Also note that depending on the coding language you use, functions may look different depending on the language. </p> \
                       <p> For variables inside the function, you are also required to list out their "type" </p> \
                        <p> The "return" keyword basically signifies the end of a function. You can choose to return back a specific value back to the "caller" of the function </p> \
                       <p><em>Game Format:</em> To complete this level, you must organize the lines of code in a way that the code is legal and will not produce any compiler errors.</p> \
                       </div>',
           code: ["function(int x):", "int a;", "int b;", "a = 100;"
           , "b = a + x;", "return b;"],
           createdAt: new Date()
       });




       Challenge.insert({
           domain: 'Sorting',
           subdomain: 1,
           level: 3,
           section: 1,
           title: 'Introduction to coding II',
           problem: '<div class="msB"><p><strong>Introduction II</strong> <br> \
                       <p>For the second task, we will be dealing with function calls and strings. Strings are basically an assortment of single character, otherwise known as words in the english language.\
                       String behaviour varies for each programing language; in this level, we will inherit the behaviour of strings in C (programming language) \
                       <p><strong>The task</strong> <br> \
                       <p>This challenge will use the function call strlen from C. Strlen takes a string as its "input" or parameter, and number of letters in the string; for more information \
                       <br> click here <a href="http://www.cplusplus.com/reference/cstring/strlen/">Strlen</a> </p> \
                       <p> We can also use a function call within a function. All you need to know is that the function call, in this case Strlen, returns an integer back \
                       to us. We can make use of this information that the function gave us and preform many tasks with it. <br> </p> \
                       <p><em>Game Format:</em> To complete this level, you must organize the lines of code in a way that the code is legal and will not produce any compiler errors</p><br> \
                       <p> The given INPUT into the function: "coding" EXPECTED OUTPUT: 6 \
                       </div>',
           code: ["function(str word):", "int numofletters;", "numofletters = strlen(word);"
           , "return numofletters;"],
           createdAt: new Date()
       });


      Challenge.insert({
           domain: 'Sorting',
           subdomain: 1,
           level: 4,
           section: 1,
           title: 'Introduction to coding III',
           problem: '<div class="msB"><p><strong>Introduction II</strong> <br> \
                       <p> For this task, We will be helping you cement your knowledge of functions. Remember that the function is like a factory. Given an input, the function can do all sorts of stuff with said input \
                       and return back an output or manipulate and change the input </p> \
                       <p><strong>The Task</strong> </p> <br> \
                       <p>This challenge will require you to take an integer INPUT, and order the lines of code to give us the wanted OUTPUT (HINT: Remember to declare the variables first before using it!) </p> \
                       <p>INPUT: 0, EXPECTED OUTPUT: 45</p> \
                       </div>',
           code: ["function(int x):", "int y = 10;", "int z = 30;", "int a;", "a = 5;", "a = a * a;", "x = a + (z - y);"
           , "return x;"],
           createdAt: new Date()
       });



      Challenge.insert({
           domain: 'Sorting',
           subdomain: 1,
           level: 4,
           section: 2,
           title: 'Introduction to coding IV',
           problem: '<div class="msB"><p><strong>Introduction II</strong> <br> \
                       <p> For this task, We will be introducing the "if and else" statements. If and Else are logical checks that happens inside a function that allows us to do different things based \
                       on certain conditions. For example, "I will only eat IF I am hungry, Else I will go sleep". This plain english sentence is an example of the if and else statement. If I was hungry, then \
                       it would be true, which means I would go eat, however If I was not hungry, or FALSE, then I would go to sleep. Similarily, you can also do condition checks when you code too, such as  \
                       checking if an integer is bigger then another integer. (For example, if ( 2 > 1) ) This would always be true, which means you would go down the IF route. </p> \
                       <p><strong>The Task</strong> </p> <br> \
                       <p>This challenge will require you to use IF and ELSE statements to give the correct output </p> \
                       <p> HINT: In C: If and Else statements are enclosed in { } curly brackets, the other statements inside still need the semi-colon as correct syntax </p> \
                       <p>INPUT: 30, EXPECTED OUTPUT: False</p> \
                       </div>',
           code: ["function(int x):", "int y = 10;", " if ( x < y ) { return True; }",
           , " else { return False; }" ],
           createdAt: new Date()
       });



    }
});
