import * as DoughModel from "../models/dough";

const list = async (req: any, res: any) => {
  const result = await DoughModel.list(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const add = async (req: any, res: any) => {
  const result = await DoughModel.add(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const modify = async (req: any, res: any) => {
  const result = await DoughModel.modify(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const erase = async (req: any, res: any) => {
  const result = await DoughModel.erase(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { list, add, modify, erase };
