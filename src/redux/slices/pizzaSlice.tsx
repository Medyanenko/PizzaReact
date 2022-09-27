import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchPizzas = createAsyncThunk<PizzaItem[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6324553abb2321cba929fab0.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data as PizzaItem[];
  }
);
type PizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
interface PizzaSliceState {
  items: PizzaItem[];
  status: Status;
}
const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
