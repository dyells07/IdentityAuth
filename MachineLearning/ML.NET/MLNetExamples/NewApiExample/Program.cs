﻿using Microsoft.ML;
using Microsoft.ML.Runtime.Data;
using Microsoft.ML.Trainers;
using MLNetShared;
using System;

namespace NewApiExample
{
    class Program
    {
        static void Main(string[] args)
        {
            var dataset = MLNetUtilities.GetDataPathByDatasetName("SalaryData.csv");
            var testDataset = MLNetUtilities.GetDataPathByDatasetName("SalaryData-test.csv");

            var env = new LocalEnvironment();
            var reader = TextLoader.CreateReader(env, ctx => (
                YearsExperience: ctx.LoadFloat(0),
                Target: ctx.LoadFloat(1)
            ), hasHeader: true, separator: ',');

            var data = reader.Read(new MultiFileSource(dataset));

            var regression = new RegressionContext(env);

            var pipeline = reader.MakeNewEstimator()
                .Append(r => (
                    r.Target, 
                    Prediction: regression.Trainers.FastTree(label: r.Target, features: r.YearsExperience.AsVector())
                ));

            var model = pipeline.Fit(data).AsDynamic;

            var predictionFunc = model.MakePredictionFunction<SalaryData, SalaryPrediction>(env);

            var prediction = predictionFunc.Predict(new SalaryData { YearsExperience = 8 });

            Console.WriteLine($"Predicted salary - {String.Format("{0:C}", prediction.PredictedSalary)}");

            Console.Read();
        }
    }
}
