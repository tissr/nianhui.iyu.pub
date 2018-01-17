var lottery_initial_datas =[
    {
        "nameen": "avatar1",
        "namezh": "听雨1",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar2",
        "namezh": "听雨2",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar3",
        "namezh": "听雨3",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar4",
        "namezh": "听雨4",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar5",
        "namezh": "听雨5",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar6",
        "namezh": "听雨6",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar7",
        "namezh": "听雨7",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar8",
        "namezh": "听雨8",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar9",
        "namezh": "听雨9",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar10",
        "namezh": "听雨10",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar11",
        "namezh": "听雨11",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar12",
        "namezh": "听雨12",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar13",
        "namezh": "听雨13",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar14",
        "namezh": "听雨14",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar15",
        "namezh": "听雨15",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar16",
        "namezh": "听雨16",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar17",
        "namezh": "听雨17",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar18",
        "namezh": "听雨18",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar19",
        "namezh": "听雨19",
        "wish": "新年快乐"
        },
        {
        "nameen": "avatar20",
        "namezh": "听雨20",
        "wish": "新年快乐"
        }
];

var award_config = {
    "award01": 1,
    "award02": 2,
    "award03": 3,
    "award04": 4
};

// 初始化数据
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}