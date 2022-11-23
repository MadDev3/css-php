async function Get() {
    var arr = { key1: 'val1', key2: 'val2', key3: 'val3' };
    //alert('Нужно доделать');
    let form = new FormData();
    form.append('get', true);
    form.append('arr', JSON.stringify(arr))
    let response = await fetch('get.php', {
        method: 'POST',
        body: form
    })
    let result = await response.json()
    document.querySelector('.getback').innerHTML = JSON.stringify(result)
    // Сделайте запрос к файлу get.php. В запросе передайте массив "arr"
    // В запросе должно сработать условие: isset($_POST['get'])
}