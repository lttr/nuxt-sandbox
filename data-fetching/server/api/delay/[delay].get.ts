export default defineEventHandler(async (event) => {
  const delay = getRouterParam(event, "delay");

  // Parse delay parameter, default to 1 second if not provided or invalid
  const delayMs = delay ? parseInt(delay) * 1000 : 1000;

  // Validate delay (max 30 seconds for safety)
  if (delayMs > 30000) {
    throw createError({
      statusCode: 400,
      statusMessage: "Delay cannot exceed 30 seconds",
    });
  }

  // Wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, delayMs));

  // Generate random JSON object with 25 keys
  const randomObject: Record<string, any> = {};

  for (let i = 1; i <= 25; i++) {
    const key = `key${i}`;

    // Generate random value of different types
    const valueType = Math.floor(Math.random() * 4);

    switch (valueType) {
      case 0: // string
        randomObject[key] = Math.random().toString(36).substring(7);
        break;
      case 1: // number
        randomObject[key] = Math.floor(Math.random() * 1000);
        break;
      case 2: // boolean
        randomObject[key] = Math.random() > 0.5;
        break;
      case 3: // array of numbers
        randomObject[key] = Array.from({ length: 3 }, () =>
          Math.floor(Math.random() * 100),
        );
        break;
    }
  }

  return {
    delay: `${delay || 1} seconds`,
    timestamp: new Date().toISOString(),
    data: randomObject,
  };
});
