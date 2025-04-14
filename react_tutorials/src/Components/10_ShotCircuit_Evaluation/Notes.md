<!-- ShotCircuit Evaluation -->

1. It is technique used in js(and other prog. lang..) where expressions are evaluated from "left to right."

2. In logical operations, Evaluation stops as soon as the result is determined.

3. Often used in react to "conditionally render components" or execute code based on truthiness of certain conditions.

<!-- Example -->

1. Logical OR (||)

syntax: exp1 || exp2
rule: if exp1 == true return exp1, otherwise return exp2.

ex:
res = false || "Hello" // => Hello
res = true || "Hello" // => true

<!-- ------------------------ -->

2. Logical AND (&&)

syntax: exp1 && exp2
rule: if exp1 == false return exp1, otherwise return exp2.

ex:
res = true && "Hello" // => Hello
res = false && "Hello" // => false

<!-- ------------------------ -->

3. Nullish Coalescing (??)

syntax: exp1 ?? exp2
rule: if exp1 is not null or undefined, return exp1, otherwise return exp2.

ex:
res = null ?? "Hello" // => Hello
res = undefined ?? "Hello" // => Hello
res = "" ?? "Hello" // => ""
