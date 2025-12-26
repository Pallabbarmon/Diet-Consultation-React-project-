import Plan from "../models/Plan.js";

export const createPlan = async (req, res) => {
  try {
    const { meals } = req.body;
    const { userId } = req.params;
    if (!meals || !Array.isArray(meals)) return res.status(400).json({ message: "meals array required" });
    const plan = await Plan.create({
      user: userId,
      createdBy: req.user._id,
      meals,
    });
    res.json({ message: "Plan created", plan });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getUserPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(plans);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
