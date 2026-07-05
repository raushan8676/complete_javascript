const now = new Date();
console.log(now);
console.table([
    now.toDateString(),
    now.toISOString(),
    now.toLocaleDateString(),
    now.toLocaleString(),
    now.toLocaleTimeString(),
    now.toJSON(),
    now.toUTCString(),
    now.getFullYear(),
    now.getMonth(),
    now.getDay(),           // sunday=0 
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
    now.getMilliseconds(),
]);

const date1 = new Date("2026-06-15");
console.log(date1)

const date2 = new Date(2026,5,15,12,30)
console.log(date2)

// timestamp

const timestamp = Date.now();
console.log(timestamp)                          // milli seconds since 1970

// modern use case

const date = new Date();

const formatter = new Intl.DateTimeFormat("en-US",{
    year: "numeric",
    month: "short",
    day:"numeric"
})

console.log(formatter.format(date));



const time = new Date().toLocaleTimeString("en-IN",{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit"
});
console.log(time);



// 12 hr format
const Format = new Date();

console.log(Format.toLocaleTimeString("en-US",{
    hour12: true
}))

console.log(Format);