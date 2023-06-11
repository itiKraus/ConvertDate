
    function convertDate() {
        var inputDate = document.getElementById("inputDate").value;
        document.getElementById('outputDate').innerHTML = '...';
        let gregorianDate = new Date(inputDate)
        console.log('date in gregorian Date\n', gregorianDate);

        //���� �� ��� ���� ������ �����
        let day = gregorianDate.getDate()
        //���� �� ��� ����� ������ �����
        let month = gregorianDate.getMonth() + 1
        //���� �� ��� ���� ������ �����
        let year = gregorianDate.getFullYear()

        //console-����� �� ����, ����� ����� �� ������ ����� �
        console.log(`day: ${day}\nmonth: ${month}\nyear: ${year}`);

        //�� ������� �������� �� ������ ������ url-���� ������ �
        let url = `https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`

        //���� ���� ��� ����� �� ������ ����� ����� ������ ������ �����
            fetch(url)
            .then((res) => res.json())
                .then((data) => document.getElementById("outputDate").innerHTML  = data.hebrew)
            .catch((error) => console.log(error))
    }


