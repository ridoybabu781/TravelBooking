import type { NextFunction, Request, Response } from "express";
import type z from "zod";
export declare const validator: (schema: z.ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validator.d.ts.map