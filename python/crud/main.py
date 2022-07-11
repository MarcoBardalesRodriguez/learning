import pyodbc

conn = pyodbc.connect('Driver={};'
                      'Server=;'
                      'Database=;'
                      'UID=;'
                      'PWD=')
cursor = conn.cursor();
cursor.execute('select * from personaaaa')
for row in cursor:
    print(row)
