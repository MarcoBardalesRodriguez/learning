#CLASS AND OBJECTS

class Beer:

    def __init__(self, name='noName'):
        self.name = name

    def degrees(self, degrees):
        degrees = degrees
        if degrees > 18:
            print(self.name, '-drink with caution')

my_beer = Beer("tomateUna")
print(my_beer.name)
my_beer.degrees(20)
