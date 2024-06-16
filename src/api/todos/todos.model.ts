import { z } from 'zod';

// creating a schema for todo
const Todo = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

// extract the inferred type
type Todo = z.infer<typeof Todo>;

export default Todo;
