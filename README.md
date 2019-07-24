Question 1
Yes the relation is in atleast 1NF. This is because when the order of data is changed, it does not change the meaning. Further, no multiple columns exist in each of the relation's columns and does not vary the column sizes. Specifically, it can be described to be in the first normal from. All the key attributes in the table have been defined. In other words, the relation follows atomicity because all tuples contain and atomic value. 
Question 2
In this relation, the primary key is the game and name of the girl.It can be defined as PK(GIRL,GAME). The two atrributes were selected as the composite key because when turned into a tuple, unique constrait is obtained with respect to all other relationships whether or not transient. Placing the two columns together allows for unique identification of individual tuples. 
Question 3
No anomalies exist when the tuple containing Jacqueline is deleted here because only one tuple has GIRL = "Jacqueline".
In this case, the DELETE operation will remove any occurences of the two attributes:
CATEGORY: Prog.Languages
GAME : Visual Basic
However, some anomalies occur in the relation because of duplicate records in the GIRL attribute. The anomalies can be corrected by 2NF.
F1 = {GIRL, GAME, GROUP, CATEGORY}
F2 = {GAME, PRICE}
F3 = {GROUP, AGE}
Question 4
Dependency Diagram
GIRL -> GROUP
	GIRL-> AGE
	GIRL-> GAME
	GAME-> CATEGORY
	GAME-> PRICE
Question 5
As mentioned in quetion 1, the initial relation will still be in the first normal form. The main reason for this is that partial dependencies between different attributes which are not part of the tuple holding the primary key. For instance, partial dependece exist between age  group and age attribues. As such, during normalization, they must be decomposed to form new relationships. The relation does not follow 2NF. For example:
GAME -> PRICE
GIRL, GAME -> GROUP, AGE, CATEGORY, PRICE
GROUP -> AGE
Question 6
The provided relations table is in the from 1NF. As such, it must be decomposed further into the format 3NF. The table is decomposed into the 2NF form in the previous question. As indicated in the diagram, there are no transitive depedencies. As such, the 2NF form is also in the 3NF form. 
After decomposition of the provided table, [three(3)] tables are found.

F2
Game 		Price
Mirror		4.88
Lipstick	5.95
Chess		7.55
Checkers	5.95
Visual Basic	199.99

F3
GROUP		AGE
6 year olds	4
5 year olds	3	
