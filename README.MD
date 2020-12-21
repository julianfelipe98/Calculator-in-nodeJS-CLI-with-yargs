# Yargs example

## About 
Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface,
this is calculator example using yargs with 2 commands and their respectives flags -b and -l , on this example we will  be able to see a multiplication table on console or save it in the tables folder ,the commands for this example are create and list.  
more about yargs: https://www.npmjs.com/package/yargs

## create 
the create command allows us to create the file with the multiplication table on the tables folder 
the command create has defined two flags for this examples 
`--base or -b` with this flag we define the multiplication base
`--limit or -l` with this flag we define the multiplication limit
the only flag required is the base flag , if  you dont define a limit flag , the default value will be 10

## list 
the list command allows us to see the multiplication table on console 
the command create has defined two flags for this examples 


`--base or -b` with this flag we define the multiplication base \
`--limit or -l` with this flag we define the multiplication limit 

the only flag required is the base flag , if  you dont define a limit flag , the default value will be 10


## Getting started 

* Clone the repo https://github.com/julianfelipe98/Example-yargs
* In the proyect directory : `npm install`

## Example 


## create 
* `node app.js create -b 5 -l 10`
this have to crete a file with the multiplication table of number 5 until 10 on the tables folder 
## list 
* `node app.js list -b 5 -l 10`
this have to print the multiplication table of number 5 until 10
