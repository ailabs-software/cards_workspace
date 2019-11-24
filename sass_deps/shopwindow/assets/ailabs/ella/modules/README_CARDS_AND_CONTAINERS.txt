
The Ella Framework (inspired by Ella Yelich-O'Connor) defines cards and containers and their roles as follows:

1) Cards --
     Generally reusable modules which contain content.
     The cards are rendered in a repeater so there are many of them in the Container.
     Role:
       The card must configure its flex-basis (minimum width).
       The card must not override "box-sizing: border-box".

       The card may configure: minimum width, height, padding, and any style affecting its content within.

2) Containers --
    The Containers contain the Cards.
    Containers configure the number of columns (including media queries, flex wrapping, and spacing between the cards.