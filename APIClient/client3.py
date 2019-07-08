import requests, json
import time
import random
import sys

def input_timer(prompt, timeout_sec):
    import subprocess
    import sys
    import threading
    import locale

    class Local:
        # check if timeout occured
        _timeout_occured = False

        def on_timeout(self, process):
            self._timeout_occured = True
            process.kill()
            # clear stdin buffer (for linux)
            # when some keys hit and timeout occured before enter key press,
            # that input text passed to next input().
            # remove stdin buffer.
            try:
                import termios
                termios.tcflush(sys.stdin, termios.TCIFLUSH)
            except ImportError:
                # windows, just exit
                pass

        def input_timer_main(self, prompt_in, timeout_sec_in):
            # print with no new line
            print(prompt_in, end="")

            # print prompt_in immediately
            sys.stdout.flush()

            # new python input process create.
            # and print it for pass stdout
            cmd = [sys.executable, '-c', 'print(input())']
            with subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE) as proc:
                timer_proc = threading.Timer(timeout_sec_in, self.on_timeout, [proc])
                try:
                    # timer set
                    timer_proc.start()
                    stdout, stderr = proc.communicate()

                    # get stdout and trim new line character
                    result = stdout.decode(locale.getpreferredencoding()).strip("\r\n")
                finally:
                    # timeout clear
                    timer_proc.cancel()

            # timeout check
            if self._timeout_occured is True:
                # move the cursor to next line
                print("")
                raise TimeoutError
            return result

    t = Local()
    return t.input_timer_main(prompt, timeout_sec)

def getUrl(index):
    url = 'http://turnincode.cafe24.com:'+sys.argv[1]+'/home/omok/'+str(index)+'/'
    res = requests.get(url)
    if res.status_code == 404:
        time.sleep(1)
        getUrl(index)
    else:
        print(res.text)

index = 2;

while True:
    x = input_timer("x: ",7)
    y = input_timer("y: ",2)

    data =  {'client': 'white','x': x, 'y': y}
    res = requests.post('http://turnincode.cafe24.com:'+sys.argv[1]+'/home/omok/', data = data)

    index += 1
    x = input_timer("x: ",7)
    y = input_timer("y: ",2)
    
    data =  {'client': 'white','x': x, 'y': y}
    res = requests.post('http://turnincode.cafe24.com:'+sys.argv[1]+'/home/omok/', data = data)

    index += 1
    getUrl(index)
    index += 1
    getUrl(index)
    index += 1
