{
  /**
   * Type Assertions π©μ§μνμ !
   * λλ μ΄ λ³μμ νμμ νμ νλ€ !   as μ¬μ© νΉμ λ³μ λ€μ !λ₯Ό λΆμ΄κΈ°
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // π±
}
