import MemoBoard from "./components/MemoBoard";
import { useMemoStore } from "./store/MemoList";
import MemoInput from "./components/MemoInput";
import MemoElem from "./components/MemoElem";

const App = () => {
  const { memoList } = useMemoStore();
  return (
    <>
      <MemoBoard>
        {memoList.map((e) => {
          return(
            <MemoElem key={e.id} id={e.id}>
              {e.content}
            </MemoElem>
          );
        })}
      </MemoBoard>
      <MemoInput />
    </>
  );
};

export default App;
