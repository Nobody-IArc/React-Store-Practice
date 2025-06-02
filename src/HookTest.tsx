// import { useRef } from 'react';
// import { useState, useMemo } from 'react';
import { useState, useCallback } from 'react';

// useRef 테스트
// const HookRef = () => {
//     const inputRef = useRef<HTMLInputElement | null>(null);
//
//     const focusInput = () => {
//         inputRef.current?.focus();
//     };
//
//     return (
//         <div>
//             <input ref={inputRef} type='text' />
//             <button onClick={focusInput}>Focus Setting</button>
//         </div>
//     );
// }

// useMemo 테스트
// const HookMemo = () => {
//     const [count, setCount] = useState<number>(0);
//     const [show, setShow] = useState<boolean>(true);
//
//     const excal = useMemo<number>(() => {
//         console.log('계산중....');
//         return count + 2;
//     }, [count]);
//
//     return (
//         <div>
//             <p>결과 : {excal}</p>
//             <button onClick={() => setCount(count + 1)}>증가</button>
//             <button onClick={() => setShow(!show)}>토글?</button>
//             {show && <p>Show is True Now</p>}
//         </div>
//     );
// }

const HookCallback = () => {
    const [count, setCount] = useState<number>(0);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>Increase</button>
        </div>
    );
}

export default HookCallback;