hour = int(input("hora de inicio: "))
mins = int(input("minuto de inicio: "))
dura = int(input("duracion en minutos: "))

minsBefore = (hour * 60) + mins
minsAfter = minsBefore + dura

hourAfter = minsAfter // 60
minsAfter = minsAfter % 60


print(hourAfter,":",minsAfter)
