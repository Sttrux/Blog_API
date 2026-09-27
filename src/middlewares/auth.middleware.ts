import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  
  const authHeader = req.headers.authorization;

  
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1]; // Separa "Bearer" del token real

    
    jwt.verify(
      token,
      process.env.JWT_SECRET || "secret",
      (err, decoded) => {
        if (err) {
          return res.status(403).json({ message: "Token inválido o expirado" });
        }


        req.user = decoded as any;

        return next();
      },
    );
  } else {

    return res.status(401).json({ message: "Falta el token de autenticación" });
  }
};
