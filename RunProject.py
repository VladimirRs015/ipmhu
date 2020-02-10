from subprocess import Popen, call, PIPE
from os import chdir, getcwd
from threading import Thread
from sys import exit


class Thread_DB(Thread):
    def __init__(self):
        super().__init__(self)
        thread_status = 0

    def run(self):
        while True:
            db_run = Popen(mongoCommands, stderr=PIPE, stdout=PIPE)
            err = db_run.stde.read()
            output = db_run.stdout.read()
            self.thread_status = 1
            if(not err):
                break


mongoCommands = ['sudo', 'mongod']
# Run mongodb

# Get the path


def directory_change_and_execute(directory, command):
    oldpath = getcwd()
    try:
        chdir(directory)
        process = Popen(command, stderr=PIPE, stdout=PIPE)
        error = process.stderr.read()
        output = process.stdout.read()
        if(error):
            print('error')
        print(output)

    finally:
        chdir(oldpath)


def main():
    while(True):
        print("""
        Press keys
            1) Run the client
            2) Run the Server
            3) Run mongoDB
            4) Run all
            5) Exit
        """)
        command = input('>>> ')
        execute(command)


def execute(command):
    # Execute tasks
    def run_client():
        directory_change_and_execute('client', ['npm', 'run', 'serve'])

    def run_server():
        print('server')

        directory_change_and_execute('server', ['npm', 'run', 'test'])

    def run_db():
        print('db')
        db_thread = Thread_DB.run()
    # execute
    try:
        if(command == 'exit' or int(command) == 5):
            print('Bye')
            exit()
        if(int(command) == 1):
            run_client()
        elif(int(command) == 2):
            run_server()
        elif(int(command) == 3):
            run_db()
        elif(int(command) == 4):
            run_client()
            run_server()
            run_db()
        else:
            print('Error , unexpectec key')
    except ValueError:

        print('unexpected value')


main()
directory = ('client', 'server')
