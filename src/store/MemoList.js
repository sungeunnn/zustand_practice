import { create } from "zustand";

export const useMemoStore = create((set) => ({
  //메모를 담는 memoList
  memoList: [],

  //메모를 추가하는 addMemo 액션
  addMemo: (val) =>
    set((prev) => ({
      memoList: [...prev.memoList, { content: val, id: new Date().getMilliseconds() + val }],
    })),
}));
